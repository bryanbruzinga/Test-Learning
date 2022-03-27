import { screen, render, userEvent } from "../../tests";
import Dropdown from "./Dropdown";

// Get : se não encontrar, dá erro
// Query: se não encontrar, retorna null com warning
// Find: espera o elemento aparecer em tela

const options = ["Bulbassauro", "Charmander", "Squirtle"];
const title = "Selecione o Pokemon inicial";

describe("Dropdown", () => {
  // 1. Dropdown comece fechado
  it("should start closed", () => {
    render(<Dropdown title={title} options={options} onSelect={() => {}} />);
    expect(screen.queryByText(options[0])).not.toBeInTheDocument();
    expect(screen.queryByText(options[1])).not.toBeInTheDocument();
    expect(screen.queryByText(options[2])).not.toBeInTheDocument();
  });

  // 2. Quero que o dropdown mostre as opções de menu quando ele for clicado
  it("should show options when open", () => {
    render(<Dropdown title={title} options={options} onSelect={() => {}} />);

    expect(screen.queryByText(options[0])).not.toBeInTheDocument();
    expect(screen.queryByText(options[1])).not.toBeInTheDocument();
    expect(screen.queryByText(options[2])).not.toBeInTheDocument();

    const dropdownButton = screen.getByRole("button", { name: title });

    userEvent.click(dropdownButton);

    expect(screen.getByText(options[0])).toBeInTheDocument();
    expect(screen.getByText(options[1])).toBeInTheDocument();
    expect(screen.getByText(options[2])).toBeInTheDocument();
  });
  // 3. Quando sleecionar um item de menu, fechar o dropdown e indicar qual opção foi selecionada

  it("should close menu when an option is selected", () => {
    const onSelect = jest.fn();

    render(<Dropdown title={title} options={options} onSelect={onSelect} />);

    const dropdownButton = screen.getByRole("button", { name: title });
    userEvent.click(dropdownButton);

    expect(screen.getByText(options[0])).toBeInTheDocument();
    expect(screen.getByText(options[1])).toBeInTheDocument();
    expect(screen.getByText(options[2])).toBeInTheDocument();

    userEvent.click(screen.getByRole("menuitem", { name: options[1] }));

    expect(onSelect).toHaveBeenCalledWith(options[1]);

    expect(screen.queryByText(options[0])).not.toBeInTheDocument();
    expect(screen.queryByText(options[1])).not.toBeInTheDocument();
    expect(screen.queryByText(options[2])).not.toBeInTheDocument();
  });

  // 4. Dropdown ao clicar no botão deve abrir se fechado e fechar se aberto

  it("should close if open and open if closed", () => {
    render(<Dropdown title={title} options={options} onSelect={() => {}} />);

    const dropdownButton = screen.getByRole("button", { name: title });

    expect(screen.queryByText(options[0])).not.toBeInTheDocument();
    expect(screen.queryByText(options[1])).not.toBeInTheDocument();
    expect(screen.queryByText(options[2])).not.toBeInTheDocument();

    userEvent.click(dropdownButton);

    expect(screen.getByText(options[0])).toBeInTheDocument();
    expect(screen.getByText(options[1])).toBeInTheDocument();
    expect(screen.getByText(options[2])).toBeInTheDocument();

    userEvent.click(dropdownButton);

    expect(screen.queryByText(options[0])).not.toBeInTheDocument();
    expect(screen.queryByText(options[1])).not.toBeInTheDocument();
    expect(screen.queryByText(options[2])).not.toBeInTheDocument();
  });
});
