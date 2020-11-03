## Connect Server

```
Linha 212 ficheiro ./app/views/NewServerView/index.js
connectServer('https://open.rocket.chat');  
componente NewServerView
<Button
    title={I18n.t('Join_our_open_workspace')}
    ...
    onPress={this.connectOpen}
    ...
/>
Pode-se remover mas penso que nem sequer afeta o branch single-server
```

## Open Link de Trial

```
Linha 81 ficheiro ./app/views/OnBoardingView/index.js
await Linking.openURL('https://cloud.rocket.chat/trial');
Abre URL para o trial do rocket chat
<Button
    title={I18n.t('Create_a_new_workspace')}
    ...
    onPress={this.createWorkspace}
    ...
/>
Pode-se remover mas penso que nem sequer afeta o branch single-server
```

## End 2 End Encryption

Estes ficheiros nao sao importados em lado nenhum na app e apenas afetam testes.

README:
* If you're running your own Rocket.Chat server, ensure it's started (e.g. `meteor npm start` in the server project directory).
* Edit `e2e/data.js`:
  * Set the `server` to the address of the server under test
  * Set the `adminUser` and `adminPassword` to an admin user on that environment (or a user with at least `create-user` and `create-c`).
* Working example configs exist in `./e2e/data/`. Setting `FORCE_DEFAULT_DOCKER_DATA` to `1` in the `runTestsInDocker.sh` script will use the example config automatically

```
Linhas 4 e 7 ficheiro ./e2e/data.js
server: 'https://mobile.rocket.chat',
alternateServer: 'https://stable.rocket.chat',
```

```
Linhas 4 e 7 ficheiro ./e2e/data/data.cloud.js
server: 'https://mobile.rocket.chat',
alternateServer: 'https://stable.rocket.chat',
```

```
Linhas 4 e 7 ficheiro ./e2e/data/data.docker.js
server: 'https://mobile.rocket.chat',
alternateServer: 'https://stable.rocket.chat',
```

## Stories

Stories utilizam o url do servidor open do rocket chat.

Todas as actions no Provider utilizado nas stories sao funcoes vazias pelo que aparenta tratar-se de dummy data utilizado em testes de UI.

```
Linha 17 ficheiro ./storybook/stories/index.js
const baseUrl = 'https://open.rocket.chat';
import MessageContext from '../../app/containers/message/Context';
<MessageContext.Provider
    value={{
        ...
        baseUrl,
        ...
    }}
>
    ...
</MessageContext.Provider>
```

```
Linha 19 ficheiro ./storybook/stories/Markdown.js
const baseUrl = 'https://open.rocket.chat';
import Markdown from '../../app/containers/markdown';
<Markdown
    ...
    baseUrl={baseUrl}
/>
```

```
Linha 30 ficheiro ./storybook/stories/Message.js
const baseUrl = 'https://open.rocket.chat';
import MessageComponent from '../../app/containers/message/Message';
<MessageComponent
    baseUrl={baseUrl}
    ...
/>
```

```
Linha 30 ficheiro ./storybook/stories/RoomItem.js
const baseUrl = 'https://open.rocket.chat';
import RoomItemComponent from '../../app/presentation/RoomItem/RoomItem';
<RoomItemComponent
    ...
    baseUrl={baseUrl}
    ...
/>
```
