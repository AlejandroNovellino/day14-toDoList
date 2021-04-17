import React, { useState } from "react";
import PropTypes from "prop-types";
import { Container, Row, Col, Card, ListGroup, Form } from "react-bootstrap";

function MyCard() {
	let [list, setList] = useState([]);

	function handleKeyDown(e) {
		if (e.key != "Enter") return null;

		let auxValue = e.target.value;
		let auxList = [...list];
		auxList.push(auxValue);
		setList(auxList);
	}

	return (
		<Card className="mb-5" style={{ width: "30rem" }}>
			<Card.Body>
				<Form.Group className="m-0">
					<Form.Control
						onKeyDownCapture={handleKeyDown}
						type="text"
						placeholder={!list.length ? "No tasks, add a task" : ""}
					/>
				</Form.Group>
			</Card.Body>
			<ListGroup variant="flush">
				{list.map((element, index) => {
					return (
						<ListGroup.Item key={`group-${index}`} className="pl-5">
							<Container>
								<Row>
									<Col lg={11}>
										{" "}
										<p className="m-0">{element}</p>{" "}
									</Col>
									<Col
										lg={1}
										className="d-flex align-items-center justify-content-center p-0">
										{" "}
										<a hidden>X</a>{" "}
									</Col>
								</Row>
							</Container>
						</ListGroup.Item>
					);
				})}
			</ListGroup>
			<Card.Footer className="text-muted p-2">
				{list.length} item left
			</Card.Footer>
		</Card>
	);
}

MyCard.propTypes = {};

export { MyCard };
