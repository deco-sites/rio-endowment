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
				"blue-100": "#191971",
				"blue-200": "#2354CC",
				"pink-100": "#C92CC4",
				"green-100": "#21BCAE",
				// border: 2px solid;

// border-image-source: linear-gradient(90deg,  8.49%,  48.91%,  100%);


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
