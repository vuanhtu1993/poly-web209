import React from "react";
import styled from 'styled-components'
import { data } from '../../../data.js'
import Summary from '../../components/resume/Summary'
import Contact from '../../components/resume/Contact'
import WorkExperience from '../../components/resume/WorkExperience'
import Skills from '../../components/resume/Skills'
import Education from '../../components/resume/Education'
import Footnote from '../../components/resume/Footnote'

import styles from './home.module.css'

const Home = () => {
	return (
		<div className={styles.background}>
			<div className={styles.container}>
				<Summary fullName={data.fullName} jobTitle={data.jobTitle} />
				<Contact contact={data.contact} />
				<WorkExperience projects={data.projects} />
				<Skills skills={data.skills} />
				<Education other={data.other} />
				<Footnote />
			</div>
		</div>
	)
}

export default Home;