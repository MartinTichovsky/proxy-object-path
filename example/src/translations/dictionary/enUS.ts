import { Lang } from "../lang";

const dictionary: Lang = {
    _common: {
        codes: {
            "400": "Bad request",
            "500": "Internal server error"
        }
    },
    _validations: {
        signIn: {
            wrongPasswordOrUsername: "Wrong password or username"
        }
    },
    signIn: {
        button: "Sign In",
        username: "User name",
        password: "Password",
        title: "User section"
    },
    shared: {
        hello: "Welcome here",
        title: "Sinner Schrader - Hack Days Show & Tell"
    }
};

export default dictionary;