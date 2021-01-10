import styled from "@emotion/styled";

export const AppHeader = styled("header")({
    textAlign: "center"
});

export const Button = styled("button")({
    cursor: "pointer"
})

export const ChoseLanguage = styled("div")({
    "> button:not(:first-of-type)": {
        marginLeft: 15
    },
    marginTop: 20
})