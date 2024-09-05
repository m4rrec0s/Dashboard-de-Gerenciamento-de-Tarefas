"use client";

import { useState } from "react";
import {
  ChartColumnBigIcon,
  ListCheckIcon,
  MenuIcon,
  PlusIcon,
  XIcon,
} from "lucide-react";
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
import {
  ModalTrigger,
  MenuModal,
  MenuModalContent,
  MenuModalHeader,
  MenuModalItem,
  MenuModalTitle,
  MenuModalClose,
} from "./basics/menu-modal";
import Image from "next/image";
import { useAuth } from "../_context/auth-context";

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
  const { user } = useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
      <div className="flex items-center">
        <ModalTrigger onClick={() => setIsMenuOpen(true)} className="sm:hidden">
          <MenuIcon size={20} />
        </ModalTrigger>
        <ContainerTitle>Gerenciamento de Tarefas</ContainerTitle>
      </div>
      <Button $ghost style={{ color: "#fff" }} onClick={handleOpenModal}>
        <PlusIcon size={16} />
        Nova Tarefa
      </Button>

      {isMenuOpen && (
        <MenuModal>
          <MenuModalContent>
            <MenuModalHeader>
              <MenuModalClose onClick={() => setIsMenuOpen(false)}>
                <XIcon className="w-5 h-5" color="white" />
              </MenuModalClose>
            </MenuModalHeader>
            <div className="flex flex-col items-center gap-2">
              <Image
                src="/icon.jpeg"
                alt="Logo"
                width={100}
                height={100}
                className="rounded-full p-1 border"
                priority
              />
              <div className="text-center">
                <h3 className="text-md font-semibold text-white text-center">
                  {user?.name}
                </h3>
                <span className="text-gray-400 text-sm">{user?.email}</span>
              </div>
            </div>
            <div className="flex flex-col gap-1 w-full">
              <MenuModalItem href="#tasks" onClick={() => setIsMenuOpen(false)}>
                <ListCheckIcon size={24} />
                <span>Tarefas</span>
              </MenuModalItem>
              <MenuModalItem
                href="#charts"
                onClick={() => setIsMenuOpen(false)}
              >
                <ChartColumnBigIcon size={24} />
                <span>Gráficos</span>
              </MenuModalItem>
            </div>
          </MenuModalContent>
        </MenuModal>
      )}

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
