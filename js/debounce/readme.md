#  防抖
    夏天的第一杯奶茶 
    xiatian   降低一下频率


    怎么样去减低执行频率， 释放一下服务器和前端的压力呢？

    单位时间执行多少次？ 限制单位时间(1s)内执行的次数  ->  1()

    1s 触发多次 ， 取消这些， 知到1s 结束了， 执行最后一次
    第一次触发， 1s 余下的时间都

- 取消事件监听 必须传事件类型和当初绑定的事件处理函数
    原因是同一元素的同一事件， 我们可以进行多次绑定
    