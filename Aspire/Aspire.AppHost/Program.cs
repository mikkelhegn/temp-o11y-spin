var builder = DistributedApplication.CreateBuilder(args);

var redis = builder.AddRedis("redis").WithOtlpExporter();

var rtc = SpinRuntimeConfigurationBuilder.Create("myruntimeconfig.toml")
    .WithRedisKeyValueStore("default", redis);

builder.AddSpinApp("my-spin-app", "../../", 3000)
    .WithRuntimeConfig(rtc)
    .WithOtlpExporter();

builder.Build().Run();
