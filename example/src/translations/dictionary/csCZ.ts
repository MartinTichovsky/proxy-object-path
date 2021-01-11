import { Lang } from "../lang";

const dictionary: Lang = {
    _common: {
        codes: {
            "400": "Chybný požadavek",
            "500": "Intení chyba serveru"
        }
    },
    _validations: {
        signIn: {
            wrongPasswordOrUsername: "Špatné jméno nebo heslo"
        }
    },
    signIn: {
        button: "Přihlásit se",
        username: "Jméno",
        password: "Heslo",
        title: "Uživatelská sekce"
    },
    shared: {
        hello: "Vítej zde",
        title: "Sinner Schrader - Hack Days Show & Tell"
    }
};

export default dictionary;