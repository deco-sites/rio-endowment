import daisyui from "daisyui";

export default {
	plugins: [daisyui],
	daisyui: { themes: [], logs: false },
	content: ["./**/*.tsx"],
	theme: {
		container: { center: true },
		extend: {
			animation: {
				sliding: "sliding 30s linear infinite",
			},
			boxShadow: {
				header: "0px 5px 20px 0px #1C1C1E14",
				"header-mobile": "0px 5px 20px 0px #00000014",
				"infocard-hover": "10px 9px 11.1px 0px #00000040"
			},
			colors: {
				"black-100": "#191C1F",
				"white-100": "#F9F9F9",
				"white-200": "#F7F7F7",
				"blue-100": "#191971",
				"blue-200": "#2354CC",
				"blue-300": "#2251cd",
				"blue-400": "#1CD8CE",
				"pink-100": "#C92CC4",
				"pink-200": "#C92BC3",
				"green-100": "#21BCAE",
				"green-200": "#B2FCF8",
				"green-300": "#8CFBF5",
				"gray-100": "#C0C3C4",
				"gray-200": "#8D969E",
				"gray-300": "#6E685E",
				"gray-400": "#DFDDDA"
			},
			fontFamily: {
				poppins: "Poppins, sans-serif"
			},
			keyframes: {
				sliding: {
					"0%": { transform: "translateX(0)" },
					"100%": { transform: "translateX(-50%)" },
				},
			},
		},
	},
};
