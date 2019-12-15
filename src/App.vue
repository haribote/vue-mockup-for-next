<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>
        <h1>The Mock-Up</h1>
      </v-toolbar-title>
    </v-app-bar>

    <v-content>
      <v-container>
        <v-card>
          <v-card-title>
            <h2>Form control</h2>
          </v-card-title>

          <v-divider />

          <v-card-text>
            <v-row>
              <!-- デフォルト -->
              <v-col xs="12" sm="6" md="3">
                <BaseInputText label="code" name="code" />
              </v-col>

              <!-- プレースホルダー -->
              <v-col xs="12" sm="6" md="3">
                <BaseInputText
                  label="code"
                  name="code"
                  placeholder="12345678901"
                />
              </v-col>

              <!-- 入力済み -->
              <v-col xs="12" sm="6" md="3">
                <BaseInputText label="code" name="code" value="12345678901" />
              </v-col>

              <!-- required -->
              <v-col xs="12" sm="6" md="3">
                <BaseInputText
                  label="code"
                  name="code"
                  required
                  value="12345678901"
                />
              </v-col>
            </v-row>

            <v-row>
              <!-- disabled -->
              <v-col xs="12" sm="6" md="3">
                <BaseInputText
                  disabled
                  label="code"
                  name="code"
                  value="12345678901"
                />
              </v-col>

              <!-- readonly -->
              <v-col xs="12" sm="6" md="3">
                <BaseInputText
                  label="code"
                  name="code"
                  readonly
                  value="12345678901"
                />
              </v-col>
            </v-row>

            <v-row>
              <!-- エラー -->
              <v-col xs="12" sm="6" md="3">
                <BaseInputText
                  :error-messages="['error-1', 'error-2', 'error-3']"
                  label="code"
                  name="code"
                  value="12345678901"
                />
              </v-col>

              <!-- メッセージ -->
              <v-col xs="12" sm="6" md="3">
                <BaseInputText
                  :messages="['message-1', 'message1-2', 'message1-3']"
                  label="code"
                  name="code"
                  value="12345678901"
                />
              </v-col>

              <!-- ヒント -->
              <v-col xs="12" sm="6" md="3">
                <BaseInputText
                  hint="hint"
                  label="code"
                  name="code"
                  value="12345678901"
                />
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-container>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import BaseInputText from '@/components/bases/BaseInputText.vue'
import { createComponent } from '@vue/composition-api'

export default createComponent({
  components: {
    BaseInputText
  }
})
</script>
