const sleep = (timeToWait: number) => new Promise((resolve) => setTimeout(resolve, timeToWait))

export default sleep