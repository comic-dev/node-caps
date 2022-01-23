module.exports = {
  def: (str) => {
    if (!str || typeof str !== "string")
      throw new TypeError(
        `Parameter str must be typeof String, recieved type "${typeof str}"`
      );
    const first = str.search(/[a-zA-Z]/);
    return (
      str.slice(0, first) +
      str.slice(first, first + 1).toUpperCase() +
      str.slice(first + 1).toLowerCase()
    );
  },
  keep: (str) => {
    if (!str || typeof str !== "string")
      throw new TypeError(
        `Parameter str must be typeof String, recieved type ${typeof str}`
      );
    const first = str.search(/[a-zA-Z]/);
    return (
      str.slice(0, first) +
      str.slice(first, first + 1).toUpperCase() +
      str.slice(first + 1)
    );
  },
  all: (str) => {
    if (!str || typeof str !== "string")
      throw new TypeError(
        `Parameter str must be typeof String, recieved type "${typeof str}"`
      );
    return str
      .split(" ")
      .map((s) => {
        const first = s.search(/[a-zA-Z]/);
        return (
          s.slice(0, first) +
          s.slice(first, first + 1).toUpperCase() +
          s.slice(first + 1)
        );
      })
      .join(" ");
  },
  array: (str) => {
    if (!str || (typeof str[0] !== "string" && str.length > 1))
      throw new TypeError(
        `Parameter str must be typeof Array, recieved type "${typeof str}"`
      );
    try {
      return str.map((s) => {
        const first = s.search(/[a-zA-Z]/);
        return (
          s.slice(0, first) +
          s.slice(first, first + 1).toUpperCase() +
          s.slice(first + 1)
        );
      });
    } catch (err) {
      let error = new TypeError(
        `Parameter str must be typeof Array, recieved type ${typeof str}`
      );
      throw error;
    }
  },
  sent: (str) => {
    if (!str || typeof str !== "string")
      throw new TypeError(
        `Parameter str must be typeof String, recieved type "${typeof str}"`
      );
    return str
      .split(".")
      .map((s) => {
        const first = s.search(/[a-zA-Z]/);
        return (
          s.slice(0, first) +
          s.slice(first, first + 1).toUpperCase() +
          s.slice(first + 1)
        );
      })
      .join(".");
  },
  dash: (str) => {
    if (!str || typeof str !== "string")
      throw new TypeError(
        `Parameter str must be typeof String, recieved type "${typeof str}"`
      );
    return str
      .split("-")
      .map((s) => {
        const first = s.search(/[a-zA-Z]/);
        return (
          s.slice(0, first) +
          s.slice(first, first + 1).toUpperCase() +
          s.slice(first + 1)
        );
      })
      .join(".");
  },
  reg: (str) => {
    if (str.match(/-/) && str.split("-")[1].length < 3)
      return str
        .split("-")
        .map((s, i) => {
          const first = s.search(/[a-zA-Z]/);
          if (i > 0) return s.toUpperCase();
          else
            return s.slice(first, first + 1).toUpperCase() + s.slice(first + 1);
        })
        .join("-");
    return str
      .split(" ")
      .map((s) => {
        const first = s.search(/[a-zA-Z]/);
        return (
          s.slice(0, first) +
          s.slice(first, first + 1).toUpperCase() +
          s.slice(first + 1)
        );
      })
      .join(" ");
  },
  perms: (str) => {
    return str.map((v) => {
      if (!v || typeof v !== "string")
        throw new TypeError(
          `Parameter str must be typeof String, recieved type "${typeof str}"`
        );
      if (v.includes("_")) {
        return v
          .split(/_/g)
          .map((s) => {
            return s.charAt(0) + s.slice(1).toLowerCase();
          })
          .join(" ");
      } else {
        return v.charAt(0) + v.slice(1).toLowerCase();
      }
    });
  },
}
