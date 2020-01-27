import React from "react";
import Dashboard from "../components/DashBoard/DashBoard";
import { render, fireEvent } from "@testing-library/react";

describe("<Dashboard />", () => {

	it("renders without crashing", () => {
		render(<Dashboard/>);
	})

});