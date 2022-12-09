const minutesPassed = (date:Date) => Math.floor( (new Date().getTime() - date.getTime()) / 60000)

export default minutesPassed