import React, { useState } from "react";
import { useForm } from "react-hook-form";
import TextField from "../components/common/TextField";
import styled from "styled-components";

const HookForm = () => {
    const { control, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <Container>
            <h2>Apply validation</h2>
            <p>지정 유효성 검사</p>
            <form onSubmit={handleSubmit(onSubmit)}>
                <TextField name="email" control={control}/>
                <input type="submit" />
            </form>
        </Container>
    );
};

const Container = styled.div`
    h2 {
        margin-bottom: 10px;
    }
    p {
        margin-bottom: 20px;
    }
    form {
        display: flex;
        flex-direction: column;
    }

    input {
        width: 400px;
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
    }
`;

export default HookForm;
