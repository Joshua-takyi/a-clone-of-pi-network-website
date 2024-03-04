/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/*html"],
	theme: {
		extend: {
			fontFamily: {
				mulish: ["Mulish"],
			},
			colors: {
				skin: {
					goldBoarder: "var(--color-border)",
					mainHeader: "var(--color-main-header)",
					text: "var(--color-text-white)",
					goldText: "var(--color-text-gol)",
					slatetext: "var(--color-text-gray)",
					purple: "var(--color-h2-color)",
				},
			},
			backgroundColor: {
				head: {
					background: "var(--color-background)",
					bg_gol: "var(	--color-bg-gol)",
					bg_gold: "var(	--color-gold-bg)",
					purple_bg: "var(--color-bg-gol)",
					light_purple_bg: "var(--color-bg-lightp)",
				},
			},
		},
	},
	plugins: [require("tailwindcss-animated")],
};
