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
			},
			colors: {
				"white-100": "#F9F9F9",
				"blue-100": "#191971",
				"blue-200": "#2354CC",
				"blue-300": "#2251cd",
				"pink-100": "#C92CC4",
				"green-100": "#21BCAE",
				"gray-100": "#C0C3C4"
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
