import React from "react";
import ScoreBoard from "../components/ScoreBoard/ScoreBoard";
import { render, fireEvent } from "@testing-library/react";

describe("<ScoreBoard />", () => {

	it("renders without crashing", () => {
		render(<ScoreBoard/>);
	})

});