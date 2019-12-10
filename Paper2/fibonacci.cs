using System;
using Caching;
class MainClass {
    static LRUCache<ulong, ulong> cache = new LRUCache<ulong, ulong>(256, 1, false);
    static ulong START_0 = 1;
    static ulong START_1 = 0;
    static ulong fibonacci(ulong x) {
        ulong resp;
        try{
            resp = cache.Get(x);
        } catch {
            if (x == 0) {
                return START_0;
            } else if (x == 1) {
                return START_1;
            }
            resp = fibonacci(x - 2) + fibonacci(x - 1);
            cache.AddReplace(x, resp);
        }
        return resp;
    }
    static ulong fibonacciIterative(ulong x) {
        ulong prev2 = START_0;
        ulong prev1 = START_1;
        ulong current;
        for (ulong i = 0; i < x; i++) {
            current = prev2 + prev1;
            prev2 = prev1;
            prev1 = current;
        }
        return prev2;
    }
    static void Main() {
        Console.WriteLine("Enter a number");
        Console.Write(">>> ");
        ulong index = Convert.ToUInt64(Console.ReadLine());
        var watch = System.Diagnostics.Stopwatch.StartNew();
        ulong result = fibonacci(index);
        watch.Stop();
        Console.WriteLine("Result: "+result.ToString()+"; took "+watch.ElapsedMilliseconds.ToString()+"ms");
        watch = System.Diagnostics.Stopwatch.StartNew();
        result = fibonacciIterative(index);
        watch.Stop();
        Console.WriteLine("Result: "+result.ToString()+"; took "+watch.ElapsedMilliseconds.ToString()+"ms");
    }
}
