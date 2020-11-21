# Модуль socketserver для сетевого программирования
from socketserver import *

# данные сервера
host = 'localhost'
port = 8000
addr = (host, port)


# обработчик запросов TCP подкласс StreamRequestHandler
class MyTCPHandler(StreamRequestHandler):

    # функция handle делает всю работу, необходимую для обслуживания запроса.
    # доступны несколько атрибутов: запрос доступен как self.request, адрес как self.client_address, экземпляр сервера как self.server
    def handle(self):
        self.data = self.request.recv(1024)
        print('client send: ' + str(self.data))

        # sndall - отправляет сообщение
        self.request.sendall(b'Hello from server!')


if __name__ == "__main__":
    # Создаем экземпляр класса
    server = TCPServer(addr, MyTCPHandler)

    print('starting server... for exit press Ctrl+C')
    # serve_forever - запускаем сервер
    server.serve_forever()
