import React from "react";
import { Container, Row } from "react-bootstrap";

import { MyCard } from "./MyCard";

//create your first component
export function Home() {
	return (
		<Container fluid className="bg-dark vw-100">
			<Row className="justify-content-center">
				<h1 className="display-1 text-white ">todos</h1>
			</Row>
			<Row className="justify-content-center">
				<MyCard />
			</Row>
		</Container>
	);
}
