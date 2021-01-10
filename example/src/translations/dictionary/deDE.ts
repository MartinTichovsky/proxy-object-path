import { Lang } from "../lang";

const dictionary: Lang = {
    _common: {
        codes: {
            "400": "Ungültige Anforderung",
            "500": "Interner Serverfehler"
        }
    },
    _validations: {
        signIn: {
            wrongPasswordOrUsername: "Falsches Passwort oder Benutzername"
        }
    },
    signIn: {
        button: "Anmelden",
        username: "Nutzername",
        password: "Passwort",
        title: "Benutzerbereich"
    },
    shared: {
        hello: "Willkommen hier",
        title: "Sinner Schrader - Hack Days Show & Tell"
    }
};

export default dictionary;