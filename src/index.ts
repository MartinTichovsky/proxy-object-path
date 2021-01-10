type ProxyObjectPath<T, S> = {
  [P in keyof S]: ProxyObjectPath<T, S[P]>;
};

type InputType = object | string | number | boolean | undefined | null;

const pathSymbol = Symbol("Proxy object path");

export const createProxy = <T>(
  path: PropertyKey[] = []
): ProxyObjectPath<T, T> =>
  (new Proxy(
    {
      [pathSymbol]: path
    },
    {
      get(target, key) {
        if (key === pathSymbol) {
          return target[pathSymbol];
        }
        return createProxy([...(path || []), key]);
      }
    }
  ) as object) as ProxyObjectPath<T, T>;

export const getPath = <T>(
  proxy: ProxyObjectPath<T, T> | InputType
): PropertyKey[] => {
  if (!proxy) return [];
  return ((proxy as unknown) as { [pathSymbol]: PropertyKey[] })[pathSymbol];
};

export const i18ObjectPath = <T>(
  proxy: ProxyObjectPath<T, T> | InputType
): string => {
  const path = getPath(proxy);
  if (!path?.length) return "";
  if (path.length === 1) return path[0].toString();
  return `${path[0].toString()}:${path.slice(1).join(".")}`;
};

export const lastObjectProperty = <T>(
  proxy: ProxyObjectPath<T, T> | InputType
): string => {
  const path = getPath(proxy);
  if (!path?.length) return "";
  return path[path.length - 1] as string;
};

export const fullObjectPath = <T>(
  proxy: ProxyObjectPath<T, T> | InputType
): string => {
  const path = getPath(proxy);
  if (!path?.length) return "";
  return path.join(".") as string;
};
