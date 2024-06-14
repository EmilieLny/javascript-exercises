class BufferedFile {
    constructor(f, buf_size) {
        (this.f = f), (this.buf_size = buf_size);
        this.buffer = [];
    }

    write(arr) {
        arr.forEach((a) => {
            this.buffer.push(a);
            if (this.buffer.length >= this.buf_size) {
                this.flush();
            }
        });

        // SLOW SOLUTION
        //   while(this.buffer.length + arr.length > this.buf_size) {
        //     let freeSize = this.buf_size - this.buffer.length
        //     this.buffer.push(...arr.slice(0, freeSize));
        //     arr = arr.slice(freeSize);
        //     this.flush()
        //   }

        //   if(this.buffer.length + arr.length === this.buf_size) {
        //       this.buffer.push(...arr);
        //       this.flush();
        //   } else {
        //       this.buffer.push(...arr);
        //   }
    }

    flush() {
        this.f.write(this.buffer);
        this.buffer = [];
    }
}
