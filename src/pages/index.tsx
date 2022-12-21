import { FormEvent, useState } from "react";
import { Cards } from "../components/Cards";
import * as S from "../styles/styles";
import { useForm } from "./hooks/useForm";
import { formatCellphone } from "./utils";

export default function Home() {
  const {
    cellphone,
    cellphoneArray,
    email,
    emailArray,
    handleAddCellphone,
    handleAddEmail,
    handleDeleteCellPhone,
    handleDeleteEmail,
    handleSubmit,
    setCellphone,
    setEmail,
  } = useForm();

  return (
    <S.Container>
      <S.Form
        id="form"
        onSubmit={(event) => handleSubmit(event)}
        onKeyDown={(e) => (e.key === "Enter" ? e.preventDefault() : {})}
      >
        <S.Title>Novo solicitante</S.Title>
        <S.Label htmlFor="name">Nome completo</S.Label>
        <S.Input id="name" required />
        <S.Label htmlFor="documentType">Tipo de documento</S.Label>
        <S.Select id="documentType" defaultValue="RG">
          <option value="RG">RG</option>
        </S.Select>
        <S.Label htmlFor="documentNumber">Número de documento</S.Label>
        <S.Input id="documentNumber" type="number" required />
        <S.Line />
        <S.Title>Adicione dados de contato</S.Title>
        <S.Label htmlFor="email">Adicionar e-mail</S.Label>
        <S.InputBox>
          <S.InputWithAddButton
            id="email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            onKeyDown={(e) => (e.key === "Enter" ? handleAddEmail() : {})}
          />
          <S.Button type="button" onClick={() => handleAddEmail()}>
            <S.Image src="/add-circle.svg" />
          </S.Button>
        </S.InputBox>
        <Cards
          array={emailArray}
          onClick={(email) => handleDeleteEmail(email)}
        />
        <S.Label htmlFor="cellphone">Adicionar telefone</S.Label>
        <S.InputBox>
          <S.InputWithAddButton
            id="cellphone"
            type="text"
            value={cellphone}
            onChange={(event) => {
              const formatted = formatCellphone(event.target.value)
              setCellphone(formatted)
            }}
            onKeyDown={(e) => (e.key === "Enter" ? handleAddCellphone() : {})}
          />
          <S.Button type="button" onClick={() => handleAddCellphone()}>
            <S.Image src="/add-circle.svg" />
          </S.Button>
        </S.InputBox>
        <Cards
          array={cellphoneArray}
          onClick={(cellphone) => handleDeleteCellPhone(cellphone)}
        />
        <S.SubmitButton
          type="submit"
          disabled={
            emailArray.length > 0 && cellphoneArray.length > 0 ? false : true
          }
          style={{
            cursor:
              emailArray.length > 0 && cellphoneArray.length > 0
                ? "pointer"
                : "not-allowed",
          }}
        >
          Salvar
        </S.SubmitButton>
      </S.Form>
    </S.Container>
  );
}
