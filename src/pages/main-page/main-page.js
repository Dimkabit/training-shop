import React from "react";
import MainBlock from "../../components/header/main-block/main-block";
import Advantage from "../../components/advantage/advantage";
import { Woomen } from "../../components/woomen/woomen";
import LookBook from "../../components/loockBoock/LookBook";
import Subscribe from "../../components/subscribe/subscribe";
import Blog from "../../components/blog/blog";



const MainPage = () => {
	return (
		<div>
		<MainBlock />
		<Advantage />
		<Woomen typeCategory={'women'}/>
		<Woomen typeCategory={'men'}/>
		<LookBook />
		<Subscribe />
		<Blog />
		</div>
	)
};

export { MainPage };