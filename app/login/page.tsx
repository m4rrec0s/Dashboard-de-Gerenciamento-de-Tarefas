"use client";

import { useState } from "react";
import { useAuth } from "../_context/auth-context";
import  {Input}  from "../_components/basics/input/input";
import { Button } from "../_components/basics/button/button";
import { Form, FormFooter, FormTitle } from "../_components/basics/form/form";

export default function LoginPage() {
  const { login } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(name, email);
  };

  return (
    <div className="flex items-center justify-center h-screen px-5">
      <Form
        onSubmit={handleSubmit}
        className="p-8 rounded shadow-md w-full max-w-md"
      >
        <FormTitle>Faça seu login</FormTitle>
        <div className="mb-4">
          <label className="block mb-2 text-sm">Nome</label>
          <Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm">Email</label>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <FormFooter>
          <Button type="submit">Entrar</Button>
        </FormFooter>
      </Form>
    </div>
  );
}
