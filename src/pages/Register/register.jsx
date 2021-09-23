import "./register.css";
import { TextField, Button } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useHistory } from "react-router";

const Register = ({ setDataForm }) => {
  const history = useHistory();
  const schema = yup.object().shape({
    name: yup
      .string()
      .required("Não preencheu o nome!")
      .min(3, "Tamanho inválido para nome!")
      .matches(
        /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ' \s]+$/,
        "Use apenas letras!"
      ),
    email: yup
      .string()
      .email("Fomato inválido")
      .required("Não preencheu o email!"),
    password: yup
      .string()
      .required("Não preencheu a senha")
      .min(8, "Tamanho inválido para senha!")
      .matches(
        /^((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
        "senha inválida"
        //matches((?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$),
      ),
    confirm_psw: yup
      .string()
      .required("Não confirmou a senha")
      .oneOf([yup.ref("password")], "está diferente!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleForm = (data) => {
    setDataForm(data);
    history.push("/home");
  };

  return (
    <div className="register">
      <h1>Register here</h1>
      <form onSubmit={handleSubmit(handleForm)}>
        <div className="spacing">
          <TextField
            label="Nome"
            variant="outlined"
            size="small"
            color="primary"
            {...register("name")}
            error={!!errors.name}
            helperText={errors.name?.message}
          />
        </div>
        <div className="spacing">
          <TextField
            label="Email"
            variant="outlined"
            size="small"
            color="primary"
            {...register("email")}
            error={!!errors.email}
            helperText={errors.email?.message}
          />
        </div>
        <div className="spacing">
          <TextField
            label="Senha"
            variant="outlined"
            size="small"
            color="primary"
            type="password"
            {...register("password")}
            error={!!errors.password}
            helperText={errors.password?.message}
          />
        </div>
        <div className="spacing">
          <TextField
            label="Confirme a senha"
            variant="outlined"
            size="small"
            color="primary"
            type="password"
            {...register("confirm_psw")}
            error={!!errors.confirm_psw}
            helperText={errors.confirm_psw?.message}
          />
        </div>
        <Button type="submit" variant="outlined" color="primary" size="large">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Register;
