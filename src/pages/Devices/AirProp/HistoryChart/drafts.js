 // const getColor = (value) => {
   //    // const colors = props.levelColors;

   //    // Ключевые точки градиента
   //    const level1Color = [85, 145, 255];
   //    const level2Color = [60, 255, 95];
   //    const level3Color = [255, 215, 74];
   //    const level4Color = [255, 30, 30];

   //    function to_rgb(color) {
   //       const [r, g, b] = color;
   //       return `rgb(${r}, ${g}, ${b})`;
   //    }

   //    function blend_colors(color1, color2, percentage) {
   //       let color = [];
   //       for (let i = 0; i < 3; i++) {
   //          color[i] = (1 - percentage) * color1[i] + percentage * color2[i];
   //       }
   //       return to_rgb(color);
   //    }

   //    let bgColor = "";
   //    if (value >= 3000) {
   //       bgColor = blend_colors(level2Color, level3Color, (value - 2000) / 2);
   //    } else if (value >= 2000) {
   //       bgColor = blend_colors(level1Color, level2Color, (value - 2000) / 2);
   //    } else {
   //       bgColor = to_rgb(level1Color);
   //    }

   //    return bgColor;
   // };

	// / const splitHistory = () => {
		//    let segmentsHistory = [];
		//    let currentSegment = {
		//       array: [history[0]],
		//       darkColor: "",
		//       lightColor: "",
		//    };
	
		//    for (let i = 1; i < history.length; i++) {
		//       const level1 = history[i - 1].y < 1500 && history[i].y < 1500;
		//       const level2 =
		//          history[i - 1].y < 2000 &&
		//          history[i - 1].y >= 1500 &&
		//          history[i].y < 2000 &&
		//          history[i].y >= 1500;
		//       const level3 = history[i - 1].y >= 2000 && history[i].y >= 2000;
	
		//       let colors = {};
	
		//       if (level1) {
		//          colors = props.levelColors["1"];
		//       }
		//       if (level2) {
		//          colors = props.levelColors["2"];
		//       }
		//       if (level3) {
		//          colors = props.levelColors["3"];
		//       }
	
		//       let darkColor = colors.dark;
		//       let lightColor = colors.light;
	
		//       if (level1 || level2 || level3) {
		//          currentSegment.array.push(history[i]);
		//          currentSegment.darkColor = darkColor;
		//          currentSegment.lightColor = `${lightColor}66`;
		//       } else {
		//          currentSegment.array.push(history[i]); // плавные переходы
	
		//          segmentsHistory.push({ ...currentSegment }); // shallow copy
	
		//          // create segment
		//          currentSegment.array = [history[i]];
		//          currentSegment.darkColor = "";
		//          currentSegment.lightColor = "";
		//       }
		//    }
	
		//    segmentsHistory.push(currentSegment);
	
		//    return segmentsHistory;
		// };
	
		// const segmentsArray = splitHistory();
	
		// const segments = segmentsArray.map((segment) => {
		//    return {
		//       data: segment.array,
		//       normalized: true,
		//       fill: true,
		//       borderColor: segment.darkColor,
		//       backgroundColor: segment.lightColor,
		//       pointBackgroundColor: "rgba(255, 255, 255, 0.6)",
		//    };
	
		// const createGradient = (ctx, settings, p0Color, p1Color) => {
		//    const gradient = ctx.chart.createLinearGradient(...settings);
	
		//    gradient.addColorStop(0, p0Color);
		//    gradient.addColorStop(1, p1Color);
	
		//    return gradient;
		// };
	
		// const createBackgroundColor = (value) => {
		//    let level = getLevel(value);
		//    const color = getColor(level);
	
		//    // const p1Color = getColor(colors, p1Level);
	
		//    // const x = ctx.p0.x;
		//    // const y = ctx.p0.y;
		//    // const w = ctx.p1.x;
		//    // const h = ctx.p1.y;
		//    // const settings = [x, y, w, h];
	
		//    // const color = createGradient(ctx, settings, p0Color, p1Color);
	
		//    // const color = 'red';
		//    // colors[level].light + 70
	
		//    return color;
		// };


		// const getLevel = (point_value) => {
		// 	let level = 1;
	
		// 	if (point_value >= 3000) {
		// 		level = 4;
		// 	} else if (point_value >= 2000) {
		// 		level = 2;
		// 	}
	
		// 	return level;
		// };
	
		// const getColor = (level) => {
		// 	const colors = props.levelColors;
		// 	const color = colors[`${level}`];
		// 	let light = color.light;
		// 	let dark = color.dark;
	
		// 	return { light, dark };
		// };


		// segment: {
                  //    backgroundColor: (ctx) => {
                  //       if (!ctx.chart.chartArea) {
                  //          return;
                  //       }

                  //       const color = createBackgroundColor(ctx);
                  //       return color;
                  //    },
                  // },