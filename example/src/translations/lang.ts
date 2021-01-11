import { createProxy } from "proxy-object-path";

export type Lang = Readonly<{
    _common: {
        codes: {
            "400": string;
            "500": string;
        }
    },
    _validations: {
        signIn: {
            wrongPasswordOrUsername: string;
        }
    },
    signIn: {
        button: string;
        username: string;
        password: string;
        title: string;
    }
    shared: {
        hello: string;
        title: string;
    }
}>;

export default createProxy<Lang>();
