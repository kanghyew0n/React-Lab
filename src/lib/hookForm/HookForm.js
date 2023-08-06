import React, { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import TextField from "../../components/common/TextField";
import styled from "styled-components";
import { Password } from "@mui/icons-material";

const HookForm = () => {
    const {
        register,
        watch,
        formState: { errors },
        handleSubmit,
    } = useForm();

    const passwordRef = useRef();
    passwordRef.current = watch("password");

    const onSubmit = (data) => {
        console.log('data', data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Email</label>
            <input
                name="email"
                type="email"
                {...register("email", {
                    required: true,
                    pattern: /^\S+@\S+$/i,
                })}
            />
            {errors.email && <p>This Field is required</p>}

            <label>Name</label>
            <input
                name="name"
                type="name"
                {...register("name", { required: true, maxLength: 10 })}
            />
            {errors.name && errors.name.type === "required" && (
                <p>This Field is required</p>
            )}
            {errors.name && errors.name.type === "maxLength" && (
                <p>maximum length</p>
            )}

            <label>Password</label>
            <input
                name="password"
                type="password"
                {...register("name", { required: true, minLength: 6 })}
            />
            {errors.name && errors.name.type === "required" && (
                <p>This Field is required</p>
            )}
            {errors.name && errors.name.type === "minLength" && (
                <p>min length</p>
            )}

            <label>PassWord Confirm</label>
            <input
                name="password_confirm"
                type="password"
                {...register("name", {
                    required: true,
                    validate: (value) => value === passwordRef.current,
                })}
            />
            {errors.password_confirm &&
                errors.password_confirm.type === "required" && (
                    <p>This Field is required</p>
                )}
            {errors.password_confirm &&
                errors.password_confirm.type === "validate" && (
                    <p>do not match</p>
                )}

            <input type="submit" />
        </form>
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
