import styled from "@emotion/styled";

export const Button = styled("button")({
  cursor: "pointer"
})

export const ChoseLanguageContainer = styled("div")({
    "> button:not(:first-of-type)": {
        marginLeft: 15
    },
    marginTop: 20
})