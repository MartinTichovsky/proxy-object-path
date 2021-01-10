import styled from "@emotion/styled";

export const SignInForm = styled("form")({
    display: "flex",
    marginTop: 50
});

export const SignInContainer = styled("div")({
    border: "1px solid #aaa",
    padding: 25,
    margin: "auto auto",

    "h4": {
        textAlign: "center",
        textTransform: "uppercase"
    },

    "input, button": {
        boxSizing: "border-box",
        display: "block",
        margin: "auto auto",
        marginTop: 25,
        width: 200
    }
})