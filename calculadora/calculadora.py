#!/usr/bin/python
# - * - coding: utf-8 - * -

def calculadora():

	numero_uno = int(input("Introduce un numero: ")) 
	numero_dos = int(input("Introduce otro numero: ")) 
	operacion = int(input("Operacio: "))
	
	if operacion == 1:
		resultado_suma = numero_uno + numero_dos
		print "Suma de Numero Uno y Numero Dos es igual a =",resultado_suma
 	elif operacion == 2:
		resultado_resta = numero_uno - numero_dos
		print "Resta de Numero Uno y Numero Dos es igual a =",resultado_resta
	elif operacion == 3:
		resultado_multi = numero_uno * numero_dos
		print "Multiplicacion de Numero por Numero Dos es igual a =",resultado_multi
	elif operacion == 4: 
		resultado_division = numero_uno / numero_dos
		print "Division de Numero Uno Entre Numero Dos es igual a =",resultado_division



calculadora()
