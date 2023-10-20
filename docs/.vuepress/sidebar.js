module.exports = {
    '/guide/guide-java/': require('../guide/guide-java/sidebar'),//Java学习路线
    '/guide/guide-c/': require('../guide/guide-c/sidebar'),//C学习路线

    '/java/java-base/': require('../java/java-base/sidebar'), //java基础
    '/java/java-web/': require('../java/java-web/sidebar'), //javaWeb
    '/java/juc/': require('../java/juc/sidebar'), //java并发与多线程
    '/java/jvm/': require('../java/jvm/sidebar'), //java虚拟机
    '/java/frame/': require('../java/frame/sidebar'), //java框架
    '/java/microservice/': require('../java/microservice/sidebar'), //分布式/微服务/并发框架
    '/java/java-projects/': require('../java/java-projects/sidebar'), //Java项目实战
    '/java/interview/': require('../java/interview/sidebar'), //Java面试题
    '/java/source-code/': require('../java/source-code/sidebar'), //Java源码系列

    '/bigdata/hadoop/': require('../bigdata/hadoop/sidebar'), //大数据-hadoop
    '/bigdata/hive/': require('../bigdata/hive/sidebar'), //大数据-hive

    '/php/php-base': require('../php/php-base/sidebar'), //PHP基础
    '/php/php-projects': require('../php/php-projects/sidebar'), //PHP项目实战
}
