import React from 'react'
import ReactDom from 'react-dom'
import TeamEditor from './TeamEditorComponent/TeamEditor'
import PenguinRepository from './PenguinRepository/PenguinRepository';

const penguinRepository = new PenguinRepository();

ReactDom.render(
	<TeamEditor penguinRepository={penguinRepository} />,
	document.querySelector("#app")
)