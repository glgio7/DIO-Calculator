import Input from "./components/Input";
import Button from "./components/Button";
import { Container, Content, Header, Row } from "./styles";
import { useState } from "react";

const App = () => {
	const [currentNumber, setCurrentNumber] = useState();
	const [firstNumber, setFirstNumber] = useState();
	const [operation, setOperation] = useState("");

	const handleOnClear = () => {
		setCurrentNumber(0);
		setFirstNumber();
		setOperation("");
	};

	const handleAddNumber = (num) => {
		if (currentNumber) {
			setCurrentNumber((prev) => `${prev}${num}`);
		} else setCurrentNumber(num);
	};

	const handleMultNumbers = () => {
		setFirstNumber(currentNumber);
		setOperation("x");
		setCurrentNumber(0);
	};

	const handleDivNumbers = () => {
		setFirstNumber(currentNumber);
		setOperation("/");
		setCurrentNumber(0);
	};

	const handleSumNumbers = () => {
		setFirstNumber(currentNumber);
		setOperation("+");
		setCurrentNumber(0);
	};

	const handleMinusNumbers = () => {
		setFirstNumber(currentNumber);
		setOperation("-");
		setCurrentNumber(0);
	};

	const handleEquals = () => {
		if (firstNumber !== "0" && operation !== "" && currentNumber !== "0") {
			switch (operation) {
				case "+":
					setCurrentNumber(currentNumber + firstNumber);
					break;
				case "-":
					setCurrentNumber(firstNumber - currentNumber);
					break;
				case "x":
					setCurrentNumber(firstNumber * currentNumber);
					break;
				case "/":
					setCurrentNumber(firstNumber / currentNumber);
					break;
				default:
					break;
			}
		}
	};

	return (
		<>
			<Header>
				<span>Calculator</span>
			</Header>
			<Container>
				<Content>
					<Input value={currentNumber !== 0 ? currentNumber : ""} />
					<div className="wrapper">
						<Row>
							<Button label="+" onClick={handleSumNumbers} />
							<Button label="-" onClick={handleMinusNumbers} />
							<Button label="/" onClick={handleDivNumbers} />
							<Button label="X" onClick={handleMultNumbers} />
						</Row>
						<Row>
							<Button label="7" onClick={() => handleAddNumber(7)} />
							<Button label="8" onClick={() => handleAddNumber(8)} />
							<Button label="9" onClick={() => handleAddNumber(9)} />
							<Button label="C" onClick={handleOnClear} />
						</Row>
						<Row>
							<Button label="4" onClick={() => handleAddNumber("4")} />
							<Button label="5" onClick={() => handleAddNumber("5")} />
							<Button label="6" onClick={() => handleAddNumber("6")} />
							<Button
								label="."
								onClick={() => setCurrentNumber(currentNumber.concat("."))}
							/>
						</Row>
						<Row>
							<Button label="1" onClick={() => handleAddNumber("1")} />
							<Button label="2" onClick={() => handleAddNumber("2")} />
							<Button label="3" onClick={() => handleAddNumber("3")} />
							<Button label="=" onClick={handleEquals} />
						</Row>
					</div>
				</Content>
			</Container>
		</>
	);
};

export default App;
