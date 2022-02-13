import React from "react";
import MainBlock from "../../components/header/main-block/main-block";
import Advantage from "../../components/advantage/advantage";
import Woomen from "../../components/woomen/woomen";
import Men from "../../components/men/men";
import LookBook from "../../components/loockBoock/LookBook";
import Subscribe from "../../components/subscribe/subscribe";
import Blog from "../../components/blog/blog";
import Filter from "../../components/filter/filterWomen";
import FilterMen from "../../components/filter/filterMen";

const MainPage = () => {
	return (
		<div>
			<MainBlock />
			<Advantage />
			<Filter />
			<Woomen />
			<FilterMen />
			<Men />
			<LookBook />
			<Subscribe />
			<Blog />
		</div>
	)
};

export default MainPage;