"use client";

import { useState } from "react";
import {
  CheckIcon,
  FilePenIcon,
  PlayIcon,
  TrashIcon,
  XIcon,
} from "lucide-react";
import Badge from "./basics/badge/badge";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "./basics/card/card";
import { Button } from "./basics/button/button";
import {
  ModalOverlay,
  ModalContainer,
  ModalHeader,
  ModalTitle,
  ModalBody,
  ModalFooter,
} from "./basics/modal/modal";
import { Input } from "./basics/input/input";

interface TaskItemProps {
  props: {
    id: number;
    title: string;
    description: string;
    status: string;
    created_at: string;
    completed_at?: string | null;
  };
  onEdit: (
    id: number,
    updatedTask: { title: string; description: string }
  ) => void;
  onDelete: (id: number) => void;
}

const TaskItem = ({ props, onEdit, onDelete }: TaskItemProps) => {
  const [status, setStatus] = useState(props.status);
  const [completedAt, setCompletedAt] = useState(props.completed_at);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, setTitle] = useState(props.title);
  const [description, setDescription] = useState(props.description);

  const handleStart = () => {
    setStatus("Em progresso");
  };

  const handleComplete = () => {
    setStatus("Concluída");
    setCompletedAt(new Date().toISOString());
  };

  const handleEditClick = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleSave = () => {
    onEdit(props.id, {
      title,
      description,
    });
    setIsModalOpen(false);
  };

  const handleDelete = () => {
    onDelete(props.id);
  };

  return (
    <>
      <Card key={props.id} className="relative">
        <CardHeader>
          <CardTitle>{props.title}</CardTitle>
          <CardDescription>{props.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div className="text-sm text-muted-foreground">
              Criada: {new Date(props.created_at).toLocaleDateString()}
            </div>
            {completedAt && (
              <div className="text-sm text-muted-foreground">
                Finalizada: {new Date(completedAt).toLocaleDateString()}
              </div>
            )}
          </div>
        </CardContent>
        <CardFooter className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {status === "Pendente" && (
              <Button outline onClick={handleStart}>
                <PlayIcon className="w-4 h-4" />
                Iniciar
              </Button>
            )}
            {status === "Em progresso" && (
              <Button outline onClick={handleComplete}>
                <CheckIcon className="w-4 h-4" />
                Completar
              </Button>
            )}
            {status === "Concluída" && <Badge>Concluída</Badge>}
          </div>
          <div className="flex items-center gap-2">
            {status !== "Concluída" && (
              <Button outline onClick={handleEditClick}>
                <FilePenIcon className="w-4 h-4" />
                Editar
              </Button>
            )}
            <Button outline onClick={handleDelete}>
              <TrashIcon className="w-4 h-4" />
              Deletar
            </Button>
          </div>
        </CardFooter>
      </Card>

      {isModalOpen && (
        <ModalOverlay>
          <ModalContainer>
            <ModalHeader>
              <ModalTitle>Editar Tarefa</ModalTitle>
              <Button ghost onClick={handleModalClose}>
                <XIcon className="w-5 h-5" />
              </Button>
            </ModalHeader>
            <ModalBody>
              <div>
                <label htmlFor="taskTitle" className="font-semibold">
                  Titulo
                </label>
                <Input
                  id="taskTitle"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="mt-5">
                <label htmlFor="taskDescription" className="font-semibold">
                  Descrição
                </label>
                <Input
                  id="taskDescription"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
            </ModalBody>
            <ModalFooter>
              <Button outline onClick={handleModalClose}>
                Cancelar
              </Button>
              <Button onClick={handleSave}>Salvar</Button>
            </ModalFooter>
          </ModalContainer>
        </ModalOverlay>
      )}
    </>
  );
};

export default TaskItem;
