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
				"infocard-hover": "10px 9px 11.1px 0px #00000040",
				"card": "0px 0px 0px 1px #DFDDDA"
			},
			colors: {
				"black-100": "#191C1F",
				"black-200": "#020617",
				"white-100": "#F9F9F9",
				"white-200": "#F7F7F7",
				"white-300": "#ECF0F4",
				"blue-100": "#191971",
				"blue-200": "#2354CC",
				"blue-300": "#2251cd",
				"blue-400": "#1CD8CE",
				"pink-100": "#C92CC4",
				"pink-200": "#C92BC3",
				"green-100": "#21BCAE",
				"green-200": "#B2FCF8",
				"green-300": "#8CFBF5",
				"green-400": "#1CD8CE57",
				"gray-100": "#C0C3C4",
				"gray-200": "#8D969E",
				"gray-300": "#6E685E",
				"gray-400": "#DFDDDA",
				"gray-500": "#E2E8F0",
				"gray-600": "#727272",
				"gray-700": "#787A7D",
				"gray-800": "#64748B",
				"gray-900": "#3D3D3D"
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
