# Buffered File

## Requirements:

Assume we have a File class whose constructor takes a filepath string as an argument. It has a single method called write, which persists bytes directly to disk.

```
f = File('/tmp/my/file.txt')
f.write(b"hello world")
```

Write a wrapper class for the file object which allows us to buffer the writes in-memory. The wrapper class, `BufferedFile` is initialized with a File class object and a buffer size.

It has two methods: write and flush. The data should be flushed to disk when the buffer is full, or on demand with a method called flush.

All bytes must be stored in the buffer first before being written to disk. The buffer cannot use more memory than the max bytes allowed.

# Example usage:

```
f = File('/tmp/my/file.txt')
buf_size = 1000

b = BufferedFile(f, buf_size)
b.write(b"hello world")
b.flush()
```
