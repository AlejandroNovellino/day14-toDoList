import React from "react";
import { Container, Row } from "react-bootstrap";

import { MyCard } from "./MyCard";

//create your first component
export function Home() {
	return (
		<Container fluid className="background vw-100 vh-100">
			<Row className="justify-content-center">
				<h1 className="display-1 titleColor">todos</h1>
			</Row>
			<Row className="justify-content-center">
				<MyCard />
			</Row>
		</Container>
	);
}
