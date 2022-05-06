function func() {
    this.const++
}

func.const = 0;
func(1);
console.log(func.const);