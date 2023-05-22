import JSONBig from 'json-bigint'
import BigNumber from "bignumber.js";

export function formatStrToObject(obj = {}) {
  if (typeof obj !== "object") return obj;
  const res = {}
  for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
      const property = obj[key];
      // console.log(property, BigNumber.isBigNumber(property), property instanceof BigNumber)

      if (Array.isArray(property)) {
        const items = property.map(i => formatStrToObject(i))
        res[key] = items;
      } else if(BigNumber.isBigNumber(property)) {
        res[key] = property.toString();
      } else if (Object.prototype.toString.call(property) === '[object Object]') {
        res[key] = formatStrToObject(property);
      } else {
        try {
          const current = JSONBig.parse(property)

          if(Array.isArray(current)) {
            const list = []
            Array.isArray(current) && current.map(item => {
              list.push(formatStrToObject(item || {}))
            })
            res[key] = list;
          } else {
            res[key] = formatStrToObject(current);
          }
        } catch (error) {
          res[key] = property
        }
      }
    }
  }
  return res;
}

export function drawNumber(str = "") {
  return String(str)?.match(/\d+/g)?.map(numStr => parseInt(numStr));;
}

export function matchNumber(str = "") {
  return str?.match(/\d+/g)
}

export function decimalsNumber(str = "") {
  return str?.match(/\d+\.\d+/g)?.[0] || "";
}

export function setTimeoutWithRAF(callback, delay) {
  let start = null;
  function step(timestamp) {
    if (!start) start = timestamp;
    let progress = timestamp - start;
    if (progress < delay) {
      requestAnimationFrame(step);
    } else {
      callback();
    }
  }
  requestAnimationFrame(step);
}

export function createPreviewImg(targetNode) {
  if (!targetNode) return "" 
  
  // 获取DOM节点的位置和大小
  const rect = targetNode.getBoundingClientRect();

  // 创建一个Canvas元素
  const canvas = document.createElement("canvas");
  canvas.width = rect.width;
  canvas.height = rect.height;

  // 获取Canvas的2D上下文
  const context = canvas.getContext("2d");

  // 将DOM节点绘制到Canvas上下文中
  context.drawWindow(
    window,
    rect.left,
    rect.top,
    rect.width,
    rect.height,
    "rgb(255,255,255)"
  );

  // 将Canvas内容转换为DataURL字符串
  // const previewUrl = canvas.toDataURL();
}