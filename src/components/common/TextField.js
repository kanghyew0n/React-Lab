import React, { useState } from "react";
import styled from "styled-components";
import { useController } from "react-hook-form";

const TextField = ({ name, control }) => {
    const {
        field: { onChange },
        fieldState: { invalid, error },
    } = useController({
        name,
        control,
        rules: {
            required: true,
            pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
            message: "이메일 형식 부탁",
        },
    });

    return (
        <Container>
            {console.log("invalid : ", invalid)}
            {console.log("error : ", error)}
            <label htmlFor={name}>이메일</label>
            <Input onChange={onChange} id={name} type={name} />
            {invalid && <span>{error?.message}</span>}
        </Container>
    );
};

const Container = styled.div`
    width: 400px;

    span,
    p {
        font-size: 12px;
        color: #bf1650;
    }
`;

const Input = styled.input`
    width: 100%;
    padding: 15px 10px;
    margin: 10px 0;
    border-radius: 4px;
    border: 1px solid #999;
    background-color: #000;
    color: #eee;

    &:focus {
        border: 1px solid #eee;
        outline: none;
    }
`;

export default TextField;
