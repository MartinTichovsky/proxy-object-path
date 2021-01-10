import {
  createProxy,
  fullObjectPath,
  i18ObjectPath,
  lastObjectProperty
} from "./index";

interface TestInterface {
  0: string;
  property: string;
  propertyBool: boolean;
  propertyNull: null;
  propertyUndefined?: string;
  number: number;
  func: () => void;
  object: {
    0: string;
    property: string;
    propertyBool: boolean;
    propertyNull: null;
    propertyUndefined?: string;
    number: number;
    func: () => void;
    object: {
      0: string;
      property: string;
      propertyBool: boolean;
      propertyNull: null;
      propertyUndefined?: string;
      number: number;
      func: () => void;
    };
  };
}

const testInterfaceProxy = createProxy<TestInterface>();

const values: any[] = [
  undefined,
  null,
  "some text",
  "",
  0,
  1,
  NaN,
  true,
  false
];

test("i18ObjectPath", () => {
  values.forEach((x) => expect(i18ObjectPath(x)).toBe(""));
  expect(i18ObjectPath(testInterfaceProxy[0])).toBe("0");
  expect(i18ObjectPath(testInterfaceProxy.property)).toBe("property");
  expect(i18ObjectPath(testInterfaceProxy.propertyBool)).toBe("propertyBool");
  expect(i18ObjectPath(testInterfaceProxy.propertyNull)).toBe("propertyNull");
  expect(i18ObjectPath(testInterfaceProxy.propertyUndefined)).toBe(
    "propertyUndefined"
  );
  expect(i18ObjectPath(testInterfaceProxy.number)).toBe("number");
  expect(i18ObjectPath(testInterfaceProxy.func)).toBe("func");
  expect(i18ObjectPath(testInterfaceProxy.object)).toBe("object");
  expect(i18ObjectPath(testInterfaceProxy.object[0])).toBe("object:0");
  expect(i18ObjectPath(testInterfaceProxy.object.property)).toBe(
    "object:property"
  );
  expect(i18ObjectPath(testInterfaceProxy.object.propertyBool)).toBe(
    "object:propertyBool"
  );
  expect(i18ObjectPath(testInterfaceProxy.object.propertyNull)).toBe(
    "object:propertyNull"
  );
  expect(i18ObjectPath(testInterfaceProxy.object.propertyUndefined)).toBe(
    "object:propertyUndefined"
  );
  expect(i18ObjectPath(testInterfaceProxy.object.number)).toBe("object:number");
  expect(i18ObjectPath(testInterfaceProxy.object.func)).toBe("object:func");
  expect(i18ObjectPath(testInterfaceProxy.object.object)).toBe("object:object");
  expect(i18ObjectPath(testInterfaceProxy.object.object[0])).toBe(
    "object:object.0"
  );
  expect(i18ObjectPath(testInterfaceProxy.object.object.property)).toBe(
    "object:object.property"
  );
  expect(i18ObjectPath(testInterfaceProxy.object.object.propertyBool)).toBe(
    "object:object.propertyBool"
  );
  expect(i18ObjectPath(testInterfaceProxy.object.object.propertyNull)).toBe(
    "object:object.propertyNull"
  );
  expect(
    i18ObjectPath(testInterfaceProxy.object.object.propertyUndefined)
  ).toBe("object:object.propertyUndefined");
  expect(i18ObjectPath(testInterfaceProxy.object.object.number)).toBe(
    "object:object.number"
  );
  expect(i18ObjectPath(testInterfaceProxy.object.object.func)).toBe(
    "object:object.func"
  );
});

test("lastObjectProperty", () => {
  values.forEach((x) => expect(lastObjectProperty(x)).toBe(""));
  expect(lastObjectProperty(testInterfaceProxy[0])).toBe("0");
  expect(lastObjectProperty(testInterfaceProxy.property)).toBe("property");
  expect(lastObjectProperty(testInterfaceProxy.propertyBool)).toBe(
    "propertyBool"
  );
  expect(lastObjectProperty(testInterfaceProxy.propertyNull)).toBe(
    "propertyNull"
  );
  expect(lastObjectProperty(testInterfaceProxy.propertyUndefined)).toBe(
    "propertyUndefined"
  );
  expect(lastObjectProperty(testInterfaceProxy.number)).toBe("number");
  expect(lastObjectProperty(testInterfaceProxy.func)).toBe("func");
  expect(lastObjectProperty(testInterfaceProxy.object)).toBe("object");
  expect(lastObjectProperty(testInterfaceProxy.object[0])).toBe("0");
  expect(lastObjectProperty(testInterfaceProxy.object.property)).toBe(
    "property"
  );
  expect(lastObjectProperty(testInterfaceProxy.object.propertyBool)).toBe(
    "propertyBool"
  );
  expect(lastObjectProperty(testInterfaceProxy.object.propertyNull)).toBe(
    "propertyNull"
  );
  expect(lastObjectProperty(testInterfaceProxy.object.propertyUndefined)).toBe(
    "propertyUndefined"
  );
  expect(lastObjectProperty(testInterfaceProxy.object.number)).toBe("number");
  expect(lastObjectProperty(testInterfaceProxy.object.func)).toBe("func");
  expect(lastObjectProperty(testInterfaceProxy.object.object)).toBe("object");
  expect(lastObjectProperty(testInterfaceProxy.object.object[0])).toBe("0");
  expect(lastObjectProperty(testInterfaceProxy.object.object.property)).toBe(
    "property"
  );
  expect(
    lastObjectProperty(testInterfaceProxy.object.object.propertyBool)
  ).toBe("propertyBool");
  expect(
    lastObjectProperty(testInterfaceProxy.object.object.propertyNull)
  ).toBe("propertyNull");
  expect(
    lastObjectProperty(testInterfaceProxy.object.object.propertyUndefined)
  ).toBe("propertyUndefined");
  expect(lastObjectProperty(testInterfaceProxy.object.object.number)).toBe(
    "number"
  );
  expect(lastObjectProperty(testInterfaceProxy.object.object.func)).toBe(
    "func"
  );
});

test("fullObjectPath", () => {
  values.forEach((x) => expect(fullObjectPath(x)).toBe(""));
  expect(fullObjectPath(testInterfaceProxy[0])).toBe("0");
  expect(fullObjectPath(testInterfaceProxy.property)).toBe("property");
  expect(fullObjectPath(testInterfaceProxy.propertyBool)).toBe("propertyBool");
  expect(fullObjectPath(testInterfaceProxy.propertyNull)).toBe("propertyNull");
  expect(fullObjectPath(testInterfaceProxy.propertyUndefined)).toBe(
    "propertyUndefined"
  );
  expect(fullObjectPath(testInterfaceProxy.number)).toBe("number");
  expect(fullObjectPath(testInterfaceProxy.func)).toBe("func");
  expect(fullObjectPath(testInterfaceProxy.object)).toBe("object");
  expect(fullObjectPath(testInterfaceProxy.object[0])).toBe("object.0");
  expect(fullObjectPath(testInterfaceProxy.object.property)).toBe(
    "object.property"
  );
  expect(fullObjectPath(testInterfaceProxy.object.propertyBool)).toBe(
    "object.propertyBool"
  );
  expect(fullObjectPath(testInterfaceProxy.object.propertyNull)).toBe(
    "object.propertyNull"
  );
  expect(fullObjectPath(testInterfaceProxy.object.propertyUndefined)).toBe(
    "object.propertyUndefined"
  );
  expect(fullObjectPath(testInterfaceProxy.object.number)).toBe(
    "object.number"
  );
  expect(fullObjectPath(testInterfaceProxy.object.func)).toBe("object.func");
  expect(fullObjectPath(testInterfaceProxy.object.object)).toBe(
    "object.object"
  );
  expect(fullObjectPath(testInterfaceProxy.object.object[0])).toBe(
    "object.object.0"
  );
  expect(fullObjectPath(testInterfaceProxy.object.object.property)).toBe(
    "object.object.property"
  );
  expect(fullObjectPath(testInterfaceProxy.object.object.propertyBool)).toBe(
    "object.object.propertyBool"
  );
  expect(fullObjectPath(testInterfaceProxy.object.object.propertyNull)).toBe(
    "object.object.propertyNull"
  );
  expect(
    fullObjectPath(testInterfaceProxy.object.object.propertyUndefined)
  ).toBe("object.object.propertyUndefined");
  expect(fullObjectPath(testInterfaceProxy.object.object.number)).toBe(
    "object.object.number"
  );
  expect(fullObjectPath(testInterfaceProxy.object.object.func)).toBe(
    "object.object.func"
  );
});
