#!/usr/bin/env sh
# Forge requires a configured set of both JVM and program arguments.
# Add custom JVM arguments to the user_jvm_args.txt
# Add custom program arguments {such as nogui} to this file in the next line before the "$@" or
#  pass them to this script directly
java -Xms128M -Xmx12288M -XX:+UseG1GC -XX:+UnlockExperimentalVMOptions -XX:MaxGCPauseMillis=130 -XX:+DisableExplicitGC -XX:+AlwaysPreTouch -XX:G1NewSizePercent=28 -XX:G1HeapRegionSize=16M -XX:G1ReservePercent=20 -XX:G1MixedGCCountTarget=3 -XX:InitiatingHeapOccupancyPercent=10 -XX:G1MixedGCLiveThresholdPercent=90 -XX:G1RSetUpdatingPauseTimePercent=0 -XX:SurvivorRatio=32 -XX:MaxTenuringThreshold=1 -XX:G1SATBBufferEnqueueingThresholdPercent=30 -XX:G1ConcMarkStepDurationMillis=5.0 -XX:AllocatePrefetchStyle=3 -XX:G1RSetUpdatingPauseTimePercent=5 -XX:+PerfDisableSharedMem -XX:MaxTenuringThreshold=1 -Dterminal.ansi=true -Dfile.encoding=UTF-8 -Dlog4j2.formatMsgNoLookups=true -Duser.timezone=Asia/Beijing @user_jvm_args.txt @libraries/net/minecraftforge/forge/1.19.2-43.4.12/unix_args.txt "$@"
