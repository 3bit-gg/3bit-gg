rm -r src/assets/gameData
cp -r ../Bitmon/Assets/_Shared/GameData src/assets/gameData
find src/assets/gameData -name '*.meta' -delete