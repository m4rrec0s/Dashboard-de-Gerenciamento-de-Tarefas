"use client";

import { MoonIcon, SunIcon } from "lucide-react";
import ThemeToggleContainer from "../_components/basics/theme-container";
import Header from "../_components/header";
import MainMenu from "../_components/main-menu";
import { useTheme } from "next-themes";
import LineChart from "../_components/line-chart";
import BarChart from "../_components/bar-chart";
import DoughnutChart from "../_components/doughnut-chart";
import data from "../data/tasks.json";
import {
  ChartsContainer,
  ChartSection,
} from "../_components/basics/charts-style";
import { useEffect } from "react";
import { useAuth } from "../_context/auth-context";
import { useRouter } from "next/navigation";

const ChartsPage = () => {
  const { user } = useAuth();
  const router = useRouter();
  const { resolvedTheme, setTheme } = useTheme();
  const { completedTasksByDay, completedTasksByWeek, completedTasksByMonth } =
    data.Charts;

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [user, router]);

  function handleThemeChange() {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  }

  return (
    <main>
      <Header />
      <ThemeToggleContainer>
        {resolvedTheme === "dark" ? (
          <SunIcon size={24} onClick={handleThemeChange} />
        ) : (
          <MoonIcon size={24} onClick={handleThemeChange} />
        )}
      </ThemeToggleContainer>
      <div className="flex gap-2">
        <MainMenu />
        <div className="w-full px-5 h-[90vh] py-2 overflow-y-auto">
            <ChartsContainer>
              <ChartSection>
                <h2>Tarefas Concluídas por Dia</h2>
                <LineChart data={completedTasksByDay} />
              </ChartSection>
              <ChartSection>
                <h2>Tarefas Concluídas por Semana</h2>
                <BarChart data={completedTasksByWeek} />
              </ChartSection>
              <ChartSection>
                <h2>Tarefas Concluídas por Mês</h2>
                <DoughnutChart data={completedTasksByMonth} />
              </ChartSection>
            </ChartsContainer>
        </div>
      </div>
    </main>
  );
};

export default ChartsPage;
