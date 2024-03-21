import React, { useEffect, useState } from "react";
import { setItemInLocalStorage } from "../../services/localStorageService";
import { QueryResult, formData } from "./types";
import { useAuthContextValue } from "../../contexts/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { loginConstants } from "../../constants/constants";
import Input from "../../components/common/Input/Input";
import Button from "../../components/common/Button/Button";
import { useForm, Controller } from "react-hook-form";
import ErrorSpan from "../../components/common/Error/ErrorSpan";

const LoginPage = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<formData>({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const value = useAuthContextValue();
  const { setUsername: setContextUserName } = value;

  const location = useLocation();
  const navigateTo = useNavigate();

  const { data, doFetch, loading }: QueryResult = useFetch();

  const handleNavigation = () => {
    if (location.state === null) {
      // default navigation we show
      navigateTo("/posts", { replace: true });
    } else {
      // else : user is coming to login from some page we need to navigate the user to the same page
      navigateTo(location.state.path, { replace: true });
    }
  };

  useEffect(() => {
    if (data && data.data) {
      setItemInLocalStorage("authToken", data.data.token);
      handleNavigation();
    }
  }, [data]);

  const onSubmit = (data: formData) => {
    doFetch(loginConstants.loginUrl);
    setContextUserName(data.username);

    console.log(data, "from form");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Login Form</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          alignItems: "center",
        }}
      >
        <Controller
          control={control}
          name="username"
          rules={{
            required: true,
            minLength: {
              value: 5,
              message: "Username should be more than 5 letters",
            },
          }}
          render={({ field: { value, onChange } }) => {
            return (
              <Input
                type="text"
                placeholder="Enter Username"
                value={value}
                onChange={onChange}
                errorMessage={errors?.username?.message ?? ""}
              />
            );
          }}
        />
        <Controller
          control={control}
          name="password"
          rules={{
            required: true,
            minLength: {
              value: 5,
              message: "password should be more than 5 letters",
            },
          }}
          render={({ field: { value, onChange } }) => {
            return (
              <Input
                type="password"
                placeholder="Enter password"
                value={value}
                onChange={onChange}
                errorMessage={errors?.password?.message ?? ""}
              />
            );
          }}
        />

        <Button showText={"Login"} type="submit" />
      </form>
    </div>
  );
};

export default LoginPage;
