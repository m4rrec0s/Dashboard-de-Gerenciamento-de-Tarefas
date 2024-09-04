"use client";

import { useState } from "react";
import { PlusIcon, XIcon } from "lucide-react";
import { Button } from "./basics/button";
import { Container, ContainerTitle } from "./basics/container";
import {
  ModalOverlay,
  ModalContainer,
  ModalHeader,
  ModalTitle,
  ModalBody,
  ModalFooter,
} from "./basics/modal";
import { Input } from "./basics/input";

interface Task {
  id: number;
  title: string;
  description: string;
  status: string;
  created_at: string;
  completed_at?: string | null;
}

interface HeaderProps {
  onAddTask: (task: Task) => void;
}

const Header: React.FC<HeaderProps> = ({ onAddTask }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTitle("");
    setDescription("");
  };

  const handleSaveTask = () => {
    const newTask: Task = {
      id: Date.now(), 
      title,
      description,
      status: "Pendente",
      created_at: new Date().toISOString(),
      completed_at: null,
    };

    onAddTask(newTask);
    handleCloseModal();
  };

  return (
    <Container>
      <ContainerTitle>Gerenciamento de Tarefas</ContainerTitle>
      <Button $ghost style={{ color: "#fff" }} onClick={handleOpenModal}>
        <PlusIcon size={16} />
        Nova Tarefa
      </Button>

      {isModalOpen && (
        <ModalOverlay>
          <ModalContainer>
            <ModalHeader>
              <ModalTitle>Nova Tarefa</ModalTitle>
              <Button $ghost onClick={handleCloseModal}>
                <XIcon className="w-5 h-5" />
              </Button>
            </ModalHeader>
            <ModalBody>
              <label htmlFor="taskTitle">Título</label>
              <Input
                id="taskTitle"
                value={title}
                onChange={(e: any) => setTitle(e.target.value)}
              />
              <label htmlFor="taskDescription">Descrição</label>
              <Input
                id="taskDescription"
                value={description}
                onChange={(e: any) => setDescription(e.target.value)}
              />
            </ModalBody>
            <ModalFooter>
              <Button $outline className="cancel" onClick={handleCloseModal}>
                Cancelar
              </Button>
              <Button onClick={handleSaveTask}>Criar</Button>
            </ModalFooter>
          </ModalContainer>
        </ModalOverlay>
      )}
    </Container>
  );
};

export default Header;