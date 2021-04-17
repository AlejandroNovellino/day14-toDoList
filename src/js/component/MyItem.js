import React, { useState } from "react";
import PropTypes from "prop-types";
import { Container, Row, Col, ListGroup } from "react-bootstrap";

function MyItem(props) {
	let [id, setId] = useState(props.id);

	function handleClick(handler) {
		handler(id);
	}

	return (
		<ListGroup.Item className="pl-5">
			<Container>
				<Row>
					<Col lg={11}>
						<p className="m-0">{props.element}</p>
					</Col>
					<Col
						lg={1}
						className="d-flex align-items-center justify-content-center p-0">
						<a
							className="hide"
							onClick={() => handleClick(props.func)}>
							X
						</a>
					</Col>
				</Row>
			</Container>
		</ListGroup.Item>
	);
}

MyItem.propTypes = {
	id: PropTypes.string,
	element: PropTypes.string,
	func: PropTypes.func
};

export { MyItem };
